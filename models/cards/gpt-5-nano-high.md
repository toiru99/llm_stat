---
type: Model
title: GPT-5 nano (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0535
output_speed_tps: 176.408111356108
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.1, z: -0.18, r: 47.3, estimated: false }  # 전문 지식
  reasoning: { s: 26.1, z: -0.45, r: 43.3, estimated: false }  # 추론
  coding: { s: 18.4, z: -0.76, r: 38.5, estimated: false }  # 코딩
  agentic: { s: 27.6, z: -0.69, r: 39.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 62.0, z: -0.48, r: 42.8, estimated: false }  # 멀티모달
  long_context: { s: 50.8, z: -0.21, r: 46.8, estimated: false }  # 긴문맥
  instruction: { s: 77.8, z: 1.14, r: 67.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GPT-5 nano (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.0535/1M · 176.408111356108 t/s · TTFT 40.8879662932266s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 47.3 | -0.18 | 실측 | [[gpqa-diamond]] 67.5758%×0.4, [[humanitys-last-exam]] 9.49954%×0.3 |
| 추론 | 43.3 | -0.45 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 67.5758%×1.0, [[humanitys-last-exam]] 9.49954%×1.0 |
| 코딩 | 38.5 | -0.76 | 실측 | [[terminal-bench]] 12.1212%×0.5 |
| 에이전트 | 39.7 | -0.69 | 실측 | [[tau2-bench]] 36.5497%×1.0, [[terminal-bench]] 12.1212%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 42.8 | -0.48 | 실측 | [[mmmu-pro]] 60.9827%×1.0 |
| 긴문맥 | 46.8 | -0.21 | 실측 | [[aa-lcr]] 45%×1.0 |
| 지시 따르기 | 67.1 | +1.14 | 실측 | [[ifbench]] 67.551%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
