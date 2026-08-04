---
type: Model
title: GPT-4.1 nano
creator: OpenAI
license: Proprietary
intelligence_index: 10.0
price_blended_usd_1m: 0.0775
output_speed_tps: 203.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.3, z: -0.8, r: 38.0, estimated: false }  # 전문 지식
  reasoning: { s: 18.2, z: -0.82, r: 37.7, estimated: false }  # 추론
  coding: { s: 30.9, z: -0.67, r: 39.9, estimated: false }  # 코딩
  agentic: { s: 8.7, z: -1.08, r: 33.8, estimated: false }  # 에이전트
  trust: { s: 21.8, z: -0.31, r: 45.4, estimated: false }  # 신뢰성
  multimodal: { s: 35.7, z: -1.74, r: 24.0, estimated: false }  # 멀티모달
  long_context: { s: 22.4, z: -0.8, r: 37.9, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.03, r: 34.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1 nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# GPT-4.1 nano

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.0775/1M · 203.0 t/s · TTFT 0.57s · 1M ctx` · 가성비 129.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.0 | -0.8 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.7 | -0.82 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.9 | -0.67 | 실측 | [[scicode]] 26.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 33.8 | -1.08 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 17.0%×1.0, [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 45.4 | -0.31 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 24.0 | -1.74 | 실측 | [[mmmu-pro]] 40.0%×1.0 |
| 긴문맥 | 37.9 | -0.8 | 실측 | [[aa-lcr]] 17.0%×1.0 |
| 지시 따르기 | 34.5 | -1.03 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
