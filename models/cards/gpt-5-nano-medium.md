---
type: Model
title: GPT-5 nano (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0535
output_speed_tps: 157.18842000836625
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.3, z: -0.24, r: 46.3, estimated: false }  # 전문 지식
  reasoning: { s: 25.5, z: -0.5, r: 42.6, estimated: false }  # 추론
  coding: { s: 26.4, z: -0.46, r: 43.1, estimated: false }  # 코딩
  agentic: { s: 28.6, z: -0.56, r: 41.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 58.3, z: -0.67, r: 40.0, estimated: false }  # 멀티모달
  long_context: { s: 49.2, z: -0.13, r: 48.1, estimated: false }  # 긴문맥
  instruction: { s: 75.5, z: 0.91, r: 63.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GPT-5 nano (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.0535/1M · 157.18842000836625 t/s · TTFT 22.42830651501383s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.3 | -0.24 | 실측 | [[gpqa-diamond]] 66.969696969697%×0.4, [[humanitys-last-exam]] 8.71177015755329%×0.3 |
| 추론 | 42.6 | -0.5 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.969696969697%×1.0, [[humanitys-last-exam]] 8.71177015755329%×1.0 |
| 코딩 | 43.1 | -0.46 | 실측 | [[terminal-bench]] 17.4242424242424%×0.5 |
| 에이전트 | 41.5 | -0.56 | 실측 | [[tau2-bench]] 30.409356725146203%×1.0, [[terminal-bench]] 17.4242424242424%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 40.0 | -0.67 | 실측 | [[mmmu-pro]] 58.2080924855491%×1.0 |
| 긴문맥 | 48.1 | -0.13 | 실측 | [[aa-lcr]] 43.6666666666667%×1.0 |
| 지시 따르기 | 63.6 | +0.91 | 실측 | [[ifbench]] 65.9183673469388%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
