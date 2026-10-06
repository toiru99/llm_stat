---
type: Model
title: GLM-5.1 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: 24.0
price_blended_usd_1m: 0.898
output_speed_tps: 45.0
context_window: 200000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 50.1, z: 0.35, r: 55.3, estimated: false }  # 전문 지식
  reasoning: { s: 43.7, z: 0.33, r: 54.9, estimated: false }  # 추론
  coding: { s: 54.5, z: 0.62, r: 59.3, estimated: false }  # 코딩
  agentic: { s: 76.3, z: 1.43, r: 71.5, estimated: false }  # 에이전트
  trust: { s: 35.1, z: 0.4, r: 55.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.6, z: 0.24, r: 53.6, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.08, r: 51.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.1 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# GLM-5.1 (non-reasoning)

Z AI · Open · Large · 컨텍스트 200k · 종합지능 **24.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.38 · 출력 $4.4 · 혼합 $0.898/1M · 45.0 t/s · TTFT 1.82s · 200k ctx` · 가성비 26.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.3 | +0.35 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 54.9 | +0.33 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 59.3 | +0.62 | 실측 | [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 71.5 | +1.43 | 실측 | [[tau2-bench]] 97.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 55.9 | +0.4 | 실측 | [[aa-omniscience]] 36.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.6 | +0.24 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 51.2 | +0.08 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
