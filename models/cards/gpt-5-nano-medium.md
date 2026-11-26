---
type: Model
title: GPT-5 nano (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0535
output_speed_tps: 185.830942616948
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.3, z: -0.22, r: 46.7, estimated: false }  # 전문 지식
  reasoning: { s: 25.5, z: -0.48, r: 42.8, estimated: false }  # 추론
  coding: { s: 26.4, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 28.6, z: -0.65, r: 40.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 58.3, z: -0.67, r: 40.0, estimated: false }  # 멀티모달
  long_context: { s: 49.2, z: -0.26, r: 46.1, estimated: false }  # 긴문맥
  instruction: { s: 75.5, z: 1.04, r: 65.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-5 nano (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.0535/1M · 185.830942616948 t/s · TTFT 19.217031970216s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 46.7 | -0.22 | 실측 | [[gpqa-diamond]] 66.9697%×0.4, [[humanitys-last-exam]] 8.71177%×0.3 |
| 추론 | 42.8 | -0.48 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 66.9697%×1.0, [[humanitys-last-exam]] 8.71177%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[terminal-bench]] 17.4242%×0.5 |
| 에이전트 | 40.2 | -0.65 | 실측 | [[tau2-bench]] 30.4094%×1.0, [[terminal-bench]] 17.4242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 40.0 | -0.67 | 실측 | [[mmmu-pro]] 58.2081%×1.0 |
| 긴문맥 | 46.1 | -0.26 | 실측 | [[aa-lcr]] 43.6667%×1.0 |
| 지시 따르기 | 65.7 | +1.04 | 실측 | [[ifbench]] 65.9184%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
