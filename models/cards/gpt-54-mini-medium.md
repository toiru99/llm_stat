---
type: Model
title: GPT-5.4 mini (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 0.6525
output_speed_tps: 167.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.0, z: 0.79, r: 61.8, estimated: false }  # 전문 지식
  reasoning: { s: 42.5, z: 0.32, r: 54.8, estimated: false }  # 추론
  coding: { s: 66.1, z: 0.71, r: 60.6, estimated: false }  # 코딩
  agentic: { s: 44.4, z: 0.28, r: 54.2, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.82, r: 37.7, estimated: false }  # 신뢰성
  multimodal: { s: 80.0, z: 0.36, r: 55.3, estimated: false }  # 멀티모달
  long_context: { s: 74.7, z: 0.71, r: 60.7, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.82, r: 62.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# GPT-5.4 mini (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **30.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.6525/1M · 167.0 t/s · TTFT 10.81s · 400k ctx` · 가성비 46.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.8 | +0.79 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 54.8 | +0.32 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 60.6 | +0.71 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 54.2 | +0.28 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 37.7 | -0.82 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 55.3 | +0.36 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 60.7 | +0.71 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 62.4 | +0.82 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
