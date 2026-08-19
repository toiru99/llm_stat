---
type: Model
title: GPT-4.1 nano
creator: OpenAI
license: Proprietary
intelligence_index: 10.0
price_blended_usd_1m: 0.0775
output_speed_tps: 128.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.3, z: -0.81, r: 37.9, estimated: false }  # 전문 지식
  reasoning: { s: 17.9, z: -0.86, r: 37.2, estimated: false }  # 추론
  coding: { s: 30.9, z: -0.71, r: 39.3, estimated: false }  # 코딩
  agentic: { s: 7.8, z: -1.14, r: 33.0, estimated: false }  # 에이전트
  trust: { s: 17.4, z: -0.43, r: 43.5, estimated: false }  # 신뢰성
  multimodal: { s: 35.7, z: -1.76, r: 23.6, estimated: false }  # 멀티모달
  long_context: { s: 22.9, z: -0.84, r: 37.5, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.07, r: 34.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1 nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# GPT-4.1 nano

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.0775/1M · 128.0 t/s · TTFT 0.68s · 1M ctx` · 가성비 129.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.9 | -0.81 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.2 | -0.86 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.3 | -0.71 | 실측 | [[scicode]] 26.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 33.0 | -1.14 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 17.0%×1.0, [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 43.5 | -0.43 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 23.6 | -1.76 | 실측 | [[mmmu-pro]] 40.0%×1.0 |
| 긴문맥 | 37.5 | -0.84 | 실측 | [[aa-lcr]] 19.0%×1.0 |
| 지시 따르기 | 34.0 | -1.07 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
