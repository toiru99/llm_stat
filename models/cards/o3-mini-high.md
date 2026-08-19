---
type: Model
title: o3-mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: 16.0
price_blended_usd_1m: 1.045
output_speed_tps: 224.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.5, z: -0.03, r: 49.5, estimated: false }  # 전문 지식
  reasoning: { s: 33.1, z: -0.12, r: 48.2, estimated: false }  # 추론
  coding: { s: 47.5, z: -0.04, r: 49.5, estimated: false }  # 코딩
  agentic: { s: 12.6, z: -0.95, r: 35.8, estimated: false }  # 에이전트
  trust: { s: 19.8, z: -0.33, r: 45.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 50.6, z: 0.0, r: 50.0, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.94, r: 64.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o3-mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# o3-mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **16.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $1.045/1M · 224.0 t/s · TTFT 20.91s · 200k ctx` · 가성비 15.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.5 | -0.03 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 48.2 | -0.12 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 49.5 | -0.04 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 35.8 | -0.95 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 31.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 45.1 | -0.33 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.0 | +0.0 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
