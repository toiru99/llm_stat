---
type: Model
title: GLM-4.7 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 0.5395
output_speed_tps: 72.0
context_window: 200000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.9, z: -0.22, r: 46.7, estimated: false }  # 전문 지식
  reasoning: { s: 24.5, z: -0.55, r: 41.8, estimated: false }  # 추론
  coding: { s: 45.5, z: 0.31, r: 54.6, estimated: false }  # 코딩
  agentic: { s: 70.2, z: 1.2, r: 68.0, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.99, r: 35.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 46.1, z: -0.17, r: 47.5, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.26, r: 53.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# GLM-4.7 (non-reasoning)

Z AI · Open · Large · 컨텍스트 200k · 종합지능 **17.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.6 · 출력 $2.2 · 혼합 $0.5395/1M · 72.0 t/s · TTFT 1.44s · 200k ctx` · 가성비 31.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.7 | -0.22 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 41.8 | -0.55 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 54.6 | +0.31 | 실측 | [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 68.0 | +1.2 | 실측 | [[tau2-bench]] 94.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 35.1 | -0.99 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.5 | -0.17 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 53.9 | +0.26 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
