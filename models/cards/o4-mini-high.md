---
type: Model
title: o4-mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: 0.8525
output_speed_tps: 154.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.4, z: 0.22, r: 53.3, estimated: false }  # 전문 지식
  reasoning: { s: 36.6, z: 0.07, r: 51.1, estimated: false }  # 추론
  coding: { s: 22.7, z: -0.33, r: 45.0, estimated: false }  # 코딩
  agentic: { s: 39.6, z: 0.08, r: 51.3, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.28, r: 45.8, estimated: false }  # 신뢰성
  multimodal: { s: 75.0, z: 0.24, r: 53.6, estimated: false }  # 멀티모달
  long_context: { s: 68.5, z: 0.6, r: 59.0, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.15, r: 67.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o4-mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# o4-mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 코딩

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $0.8525/1M · 154.0 t/s · TTFT 23.41s · 200k ctx` · 가성비 22.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.3 | +0.22 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 51.1 | +0.07 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 45.0 | -0.33 | 실측 | [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 51.3 | +0.08 | 실측 | [[tau2-bench]] 56.0%×1.0, [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | 45.8 | -0.28 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 53.6 | +0.24 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 59.0 | +0.6 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
