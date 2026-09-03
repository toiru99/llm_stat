---
type: Model
title: GPT-5 mini (minimal)
creator: OpenAI
license: Proprietary
intelligence_index: 14.0
price_blended_usd_1m: 0.2675
output_speed_tps: 98.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.2, z: -0.31, r: 45.3, estimated: false }  # 전문 지식
  reasoning: { s: 25.4, z: -0.46, r: 43.1, estimated: false }  # 추론
  coding: { s: 46.9, z: -0.01, r: 49.9, estimated: false }  # 코딩
  agentic: { s: 26.8, z: -0.41, r: 43.8, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.73, r: 39.1, estimated: false }  # 신뢰성
  multimodal: { s: 60.6, z: -0.49, r: 42.6, estimated: false }  # 멀티모달
  long_context: { s: 44.6, z: -0.17, r: 47.4, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.21, r: 46.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# GPT-5 mini (minimal)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 98.0 t/s · TTFT 0.95s · 400k ctx` · 가성비 52.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.3 | -0.31 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 43.1 | -0.46 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 49.9 | -0.01 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 43.8 | -0.41 | 실측 | [[tau2-bench]] 32.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 39.1 | -0.73 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 42.6 | -0.49 | 실측 | [[mmmu-pro]] 58.0%×1.0 |
| 긴문맥 | 47.4 | -0.17 | 실측 | [[aa-lcr]] 37.0%×1.0 |
| 지시 따르기 | 46.8 | -0.21 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
