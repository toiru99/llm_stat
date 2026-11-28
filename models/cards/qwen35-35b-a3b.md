---
type: Model
title: Qwen3.5 35B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.425
output_speed_tps: 126.361432073769
context_window: 262144
status: past
size_class: Small
params_b: 36
is_reasoning: true
radar:
  knowledge: { s: 61.1, z: 0.7, r: 60.4, estimated: false }  # 전문 지식
  reasoning: { s: 38.7, z: 0.18, r: 52.6, estimated: false }  # 추론
  coding: { s: 40.2, z: -0.03, r: 49.6, estimated: false }  # 코딩
  agentic: { s: 65.1, z: 0.63, r: 59.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 77.6, z: 0.31, r: 54.7, estimated: false }  # 멀티모달
  long_context: { s: 81.2, z: 0.72, r: 60.8, estimated: false }  # 긴문맥
  instruction: { s: 84.8, z: 1.43, r: 71.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Qwen3.5 35B A3B

Alibaba · Open · Small(36B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.425/1M · 126.361432073769 t/s · TTFT 3.52787296965004s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 60.4 | +0.7 | 실측 | [[gpqa-diamond]] 84.5455%×0.4, [[humanitys-last-exam]] 21.038%×0.3 |
| 추론 | 52.6 | +0.18 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 84.5455%×1.0, [[humanitys-last-exam]] 21.038%×1.0 |
| 코딩 | 49.6 | -0.03 | 실측 | [[terminal-bench]] 26.5152%×0.5 |
| 에이전트 | 59.5 | +0.63 | 실측 | [[tau2-bench]] 89.1813%×1.0, [[terminal-bench]] 26.5152%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.7 | +0.31 | 실측 | [[mmmu-pro]] 72.659%×1.0 |
| 긴문맥 | 60.8 | +0.72 | 실측 | [[aa-lcr]] 72%×1.0 |
| 지시 따르기 | 71.4 | +1.43 | 실측 | [[ifbench]] 72.517%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
