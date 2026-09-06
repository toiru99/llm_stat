---
type: Model
title: GLM-4.6
creator: Z AI
license: Open
intelligence_index: 22.0
price_blended_usd_1m: 0.715
output_speed_tps: 53.0
context_window: 200000
status: past
size_class: Large
params_b: 357
is_reasoning: true
radar:
  knowledge: { s: 46.3, z: 0.26, r: 53.9, estimated: false }  # 전문 지식
  reasoning: { s: 34.9, z: -0.01, r: 49.9, estimated: false }  # 추론
  coding: { s: 37.9, z: 0.2, r: 53.0, estimated: false }  # 코딩
  agentic: { s: 40.9, z: 0.13, r: 52.0, estimated: false }  # 에이전트
  trust: { s: 4.1, z: -0.96, r: 35.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 60.7, z: 0.36, r: 55.3, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GLM-4.6

Z AI · Open · Large(357B) · 컨텍스트 200k · 종합지능 **22.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.55 · 출력 $2.2 · 혼합 $0.715/1M · 53.0 t/s · TTFT 2.52s · 200k ctx` · 가성비 30.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.9 | +0.26 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 49.9 | -0.01 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 53.0 | +0.2 | 실측 | [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 52.0 | +0.13 | 실측 | [[gdpval]] 19.0%×1.0, [[tau2-bench]] 70.0%×1.0, [[tau3-banking]] 13.0%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | 35.6 | -0.96 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.3 | +0.36 | 실측 | [[aa-lcr]] 54.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
