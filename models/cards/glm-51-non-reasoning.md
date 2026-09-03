---
type: Model
title: GLM-5.1 (Non-reasoning)
creator: Z AI
license: Open
intelligence_index: 36.0
price_blended_usd_1m: 0.898
output_speed_tps: 52.0
context_window: 200000
status: past
size_class: Large
params_b: 744
is_reasoning: false
radar:
  knowledge: { s: 50.6, z: 0.49, r: 57.4, estimated: false }  # 전문 지식
  reasoning: { s: 44.5, z: 0.48, r: 57.2, estimated: false }  # 추론
  coding: { s: 56.9, z: 0.41, r: 56.2, estimated: false }  # 코딩
  agentic: { s: 76.3, z: 1.51, r: 72.6, estimated: false }  # 에이전트
  trust: { s: 35.1, z: 0.49, r: 57.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.1, z: 0.45, r: 56.8, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.14, r: 52.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.1 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# GLM-5.1 (Non-reasoning)

Z AI · Open · Large(744B) · 컨텍스트 200k · 종합지능 **36.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $1.38 · 출력 $4.4 · 혼합 $0.898/1M · 52.0 t/s · TTFT 1.85s · 200k ctx` · 가성비 40.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.4 | +0.49 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 57.2 | +0.48 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 56.2 | +0.41 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 72.6 | +1.51 | 실측 | [[tau2-bench]] 97.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 57.4 | +0.49 | 실측 | [[aa-omniscience]] 36.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.8 | +0.45 | 실측 | [[aa-lcr]] 54.0%×1.0 |
| 지시 따르기 | 52.1 | +0.14 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
