---
type: Model
title: GLM-4.5
creator: Z AI
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.76
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.3, z: 0.29, r: 54.3, estimated: false }  # 전문 지식
  reasoning: { s: 34.0, z: 0.03, r: 50.5, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.17, r: 52.5, estimated: false }  # 코딩
  agentic: { s: 38.4, z: 0.09, r: 51.3, estimated: false }  # 에이전트
  trust: { s: 37.6, z: 0.46, r: 56.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 63.2, z: 0.44, r: 56.6, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.3, r: 45.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# GLM-4.5

Z AI · Open · Unknown · 컨텍스트 128k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.6 · 출력 $2.2 · 혼합 $0.76/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 25.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.3 | +0.29 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 50.5 | +0.03 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 52.5 | +0.17 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 22.0%×0.5 |
| 에이전트 | 51.3 | +0.09 | 실측 | [[tau2-bench]] 43.0%×1.0, [[terminal-bench]] 22.0%×1.0 |
| 신뢰성 | 56.8 | +0.46 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.6 | +0.44 | 실측 | [[aa-lcr]] 48.0%×1.0 |
| 지시 따르기 | 45.5 | -0.3 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
