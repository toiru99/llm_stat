---
type: Model
title: GPT-4o (Nov)
creator: OpenAI
license: Proprietary
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: 159.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 31.6, z: -0.43, r: 43.5, estimated: false }  # 전문 지식
  reasoning: { s: 18.7, z: -0.78, r: 38.2, estimated: false }  # 추론
  coding: { s: 40.7, z: -0.24, r: 46.4, estimated: false }  # 코딩
  agentic: { s: 18.7, z: -0.68, r: 39.8, estimated: false }  # 에이전트
  trust: { s: 70.1, z: 2.03, r: 80.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.47, r: 28.0, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.9, r: 36.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (Nov)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# GPT-4o (Nov)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $2.5 · 출력 $10.0 · 혼합 $None/1M · 159.0 t/s · TTFT 0.79s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.5 | -0.43 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 38.2 | -0.78 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 46.4 | -0.24 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 39.8 | -0.68 | 실측 | [[tau2-bench]] 25.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 80.5 | +2.03 | 실측 | [[aa-omniscience]] 62.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.0 | -1.47 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 36.4 | -0.9 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
