---
type: Model
title: GPT-5.4 nano (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.179
output_speed_tps: 122.888386127943
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.1, z: -0.71, r: 39.3, estimated: false }  # 전문 지식
  reasoning: { s: 19.1, z: -0.8, r: 38.0, estimated: false }  # 추론
  coding: { s: 36.8, z: -0.14, r: 47.8, estimated: false }  # 코딩
  agentic: { s: 35.9, z: -0.39, r: 44.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 39.0, z: -1.65, r: 25.2, estimated: false }  # 멀티모달
  long_context: { s: 33.5, z: -0.74, r: 38.8, estimated: false }  # 긴문맥
  instruction: { s: 28.9, z: -0.89, r: 36.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.4 nano (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $0.179/1M · 122.888386127943 t/s · TTFT 1.2298734737916s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 39.3 | -0.71 | 실측 | [[gpqa-diamond]] 55.7576%×0.4, [[humanitys-last-exam]] 4.07785%×0.3 |
| 추론 | 38.0 | -0.8 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 55.7576%×1.0, [[humanitys-last-exam]] 4.07785%×1.0 |
| 코딩 | 47.8 | -0.14 | 실측 | [[terminal-bench]] 24.2424%×0.5 |
| 에이전트 | 44.1 | -0.39 | 실측 | [[tau2-bench]] 34.7953%×1.0, [[terminal-bench]] 24.2424%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 25.2 | -1.65 | 실측 | [[mmmu-pro]] 43.7572%×1.0 |
| 긴문맥 | 38.8 | -0.74 | 실측 | [[aa-lcr]] 29.6667%×1.0 |
| 지시 따르기 | 36.6 | -0.89 | 실측 | [[ifbench]] 32.7211%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
