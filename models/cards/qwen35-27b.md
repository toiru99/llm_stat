---
type: Model
title: Qwen3.5 27B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.51
output_speed_tps: 22.0141448896389
context_window: 262144
status: past
size_class: Small
params_b: 27.8
is_reasoning: true
radar:
  knowledge: { s: 63.6, z: 0.82, r: 62.2, estimated: false }  # 전문 지식
  reasoning: { s: 40.5, z: 0.26, r: 54.0, estimated: false }  # 추론
  coding: { s: 49.4, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 72.1, z: 0.88, r: 63.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.7, z: 0.48, r: 57.1, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 0.92, r: 63.7, estimated: false }  # 긴문맥
  instruction: { s: 89.1, z: 1.61, r: 74.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Qwen3.5 27B

Alibaba · Open · Small(27.8B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 추론

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · 22.0141448896389 t/s · TTFT 12.8183385569944s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 62.2 | +0.82 | 실측 | [[gpqa-diamond]] 85.7576%×0.4, [[humanitys-last-exam]] 23.911%×0.3 |
| 추론 | 54.0 | +0.26 | 실측 | [[critpt]] 0.853061%×1.0, [[gpqa-diamond]] 85.7576%×1.0, [[humanitys-last-exam]] 23.911%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[terminal-bench]] 32.5758%×0.5 |
| 에이전트 | 63.2 | +0.88 | 실측 | [[tau2-bench]] 93.8596%×1.0, [[terminal-bench]] 32.5758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.1 | +0.48 | 실측 | [[mmmu-pro]] 75.0289%×1.0 |
| 긴문맥 | 63.7 | +0.92 | 실측 | [[aa-lcr]] 77.6667%×1.0 |
| 지시 따르기 | 74.1 | +1.61 | 실측 | [[ifbench]] 75.5782%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
