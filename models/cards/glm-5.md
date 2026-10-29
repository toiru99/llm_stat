---
type: Model
title: GLM-5
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.66
output_speed_tps: 69.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 67.8, z: 0.81, r: 62.1, estimated: false }  # 전문 지식
  reasoning: { s: 65.2, z: 0.87, r: 63.1, estimated: false }  # 추론
  coding: { s: 65.2, z: 0.94, r: 64.0, estimated: false }  # 코딩
  agentic: { s: 46.7, z: 0.43, r: 56.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 0.99, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.33, r: 70.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# GLM-5

Z AI · Open · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $1.0 · 출력 $3.2 · 혼합 $0.66/1M · 69.0 t/s · TTFT 1.68s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.1 | +0.81 | 실측 | [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 63.1 | +0.87 | 실측 | [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 64.0 | +0.94 | 실측 | [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 56.4 | +0.43 | 실측 | [[apex-agents]] 14.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.9 | +0.99 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 70.0 | +1.33 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
