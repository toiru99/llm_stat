---
type: Model
title: GPT-5.4 mini (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: 0.6525
output_speed_tps: 173.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.8, z: 0.76, r: 61.5, estimated: false }  # 전문 지식
  reasoning: { s: 41.4, z: 0.3, r: 54.6, estimated: false }  # 추론
  coding: { s: 51.5, z: 0.67, r: 60.1, estimated: false }  # 코딩
  agentic: { s: 44.4, z: 0.27, r: 54.0, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.77, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: 77.8, z: 0.38, r: 55.7, estimated: false }  # 멀티모달
  long_context: { s: 75.3, z: 0.81, r: 62.1, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.92, r: 63.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-5.4 mini (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.6525/1M · 173.0 t/s · TTFT 7.21s · 400k ctx` · 가성비 35.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.5 | +0.76 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 54.6 | +0.3 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 60.1 | +0.67 | 실측 | [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 54.0 | +0.27 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 55.7 | +0.38 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 62.1 | +0.81 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 63.7 | +0.92 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
