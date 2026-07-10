---
type: Model
title: o4-mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 0.85
output_speed_tps: 137.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.3, z: 0.39, r: 55.9, estimated: false }  # 전문 지식
  reasoning: { s: 38.9, z: 0.3, r: 54.4, estimated: false }  # 추론
  coding: { s: 59.8, z: 0.59, r: 58.9, estimated: false }  # 코딩
  agentic: { s: 39.6, z: 0.14, r: 52.1, estimated: false }  # 에이전트
  trust: { s: 22.4, z: -0.25, r: 46.2, estimated: false }  # 신뢰성
  multimodal: { s: 78.3, z: 0.33, r: 54.9, estimated: false }  # 멀티모달
  long_context: { s: 72.4, z: 0.71, r: 60.7, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.15, r: 67.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o4-mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# o4-mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $0.85/1M · 137.0 t/s · TTFT 22.46s · 200k ctx` · 가성비 30.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.9 | +0.39 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 54.4 | +0.3 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 58.9 | +0.59 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 52.1 | +0.14 | 실측 | [[tau2-bench]] 56.0%×1.0, [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | 46.2 | -0.25 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 54.9 | +0.33 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 60.7 | +0.71 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
