---
type: Model
title: o3-mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: 11.0
price_blended_usd_1m: 1.045
output_speed_tps: 281.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.0, z: -0.15, r: 47.8, estimated: false }  # 전문 지식
  reasoning: { s: 32.1, z: -0.23, r: 46.5, estimated: false }  # 추론
  coding: { s: 43.0, z: 0.17, r: 52.6, estimated: false }  # 코딩
  agentic: { s: 10.3, z: -0.84, r: 37.3, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.44, r: 43.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 48.3, z: -0.14, r: 47.9, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.98, r: 64.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o3-mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# o3-mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $1.045/1M · 281.0 t/s · TTFT 17.49s · 200k ctx` · 가성비 10.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.8 | -0.15 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 46.5 | -0.23 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 52.6 | +0.17 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 37.3 | -0.84 | 실측 | [[gdpval]] 230.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 43.4 | -0.44 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.9 | -0.14 | 실측 | [[aa-lcr]] 43.0%×1.0 |
| 지시 따르기 | 64.8 | +0.98 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
