---
type: Model
title: GPT-5 nano (minimal)
creator: OpenAI
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: 0.05
output_speed_tps: 153.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 20.1, z: -0.99, r: 35.2, estimated: false }  # 전문 지식
  reasoning: { s: 15.0, z: -0.98, r: 35.3, estimated: false }  # 추론
  coding: { s: 35.8, z: -0.44, r: 43.4, estimated: false }  # 코딩
  agentic: { s: 18.4, z: -0.69, r: 39.7, estimated: false }  # 에이전트
  trust: { s: 17.6, z: -0.48, r: 42.8, estimated: false }  # 신뢰성
  multimodal: { s: 24.6, z: -2.24, r: 16.4, estimated: false }  # 멀티모달
  long_context: { s: 26.3, z: -0.65, r: 40.2, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.93, r: 36.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-15
timestamp: 2026-07-15T00:00:00Z
---

# GPT-5 nano (minimal)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.05/1M · 153.0 t/s · TTFT 0.83s · 400k ctx` · 가성비 160.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.2 | -0.99 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.3 | -0.98 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 43.4 | -0.44 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 39.7 | -0.69 | 실측 | [[tau2-bench]] 26.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 42.8 | -0.48 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 16.4 | -2.24 | 실측 | [[mmmu-pro]] 32.0%×1.0 |
| 긴문맥 | 40.2 | -0.65 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 36.0 | -0.93 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
