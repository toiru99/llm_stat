---
type: Model
title: Qwen3 30B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1765
output_speed_tps: 62.631179587981
context_window: 32768
status: past
size_class: Small
params_b: 30.5
is_reasoning: true
radar:
  knowledge: { s: 37.2, z: -0.46, r: 43.0, estimated: false }  # 전문 지식
  reasoning: { s: 22.3, z: -0.64, r: 40.4, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 14.9, z: -1.14, r: 32.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 41.3, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3 30B

Alibaba · Open · Small(30.5B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.135 · 출력 $0.55 · 혼합 $0.1765/1M · 62.631179587981 t/s · TTFT 0.405986731625025s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 43.0 | -0.46 | 실측 | [[gpqa-diamond]] 61.6162%×0.4, [[humanitys-last-exam]] 6.16%×0.3 |
| 추론 | 40.4 | -0.64 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 61.6162%×1.0, [[humanitys-last-exam]] 6.16%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 32.9 | -1.14 | 실측 | [[tau2-bench]] 26.0234%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 41.4966%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
