---
type: Model
title: o4-mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: None
output_speed_tps: 146.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.3, z: 0.33, r: 55.0, estimated: false }  # 전문 지식
  reasoning: { s: 38.9, z: 0.23, r: 53.4, estimated: false }  # 추론
  coding: { s: 59.8, z: 0.53, r: 58.0, estimated: false }  # 코딩
  agentic: { s: 39.6, z: 0.13, r: 51.9, estimated: false }  # 에이전트
  trust: { s: 21.8, z: -0.3, r: 45.5, estimated: false }  # 신뢰성
  multimodal: { s: 77.1, z: 0.26, r: 53.9, estimated: false }  # 멀티모달
  long_context: { s: 72.4, z: 0.68, r: 60.2, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.12, r: 66.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o4-mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# o4-mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $None/1M · 146.0 t/s · TTFT 17.94s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.0 | +0.33 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 53.4 | +0.23 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 58.0 | +0.53 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 51.9 | +0.13 | 실측 | [[tau2-bench]] 56.0%×1.0, [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | 45.5 | -0.3 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 53.9 | +0.26 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 60.2 | +0.68 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 66.8 | +1.12 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
