---
type: Model
title: Gemma 3 27B
creator: Google
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 21.3, z: -0.98, r: 35.3, estimated: false }  # 전문 지식
  reasoning: { s: 14.5, z: -1.0, r: 35.0, estimated: false }  # 추론
  coding: { s: 19.8, z: -0.57, r: 41.4, estimated: false }  # 코딩
  agentic: { s: 4.8, z: -1.3, r: 30.5, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.94, r: 35.8, estimated: false }  # 신뢰성
  multimodal: { s: 45.2, z: -1.31, r: 30.4, estimated: false }  # 멀티모달
  long_context: { s: 7.9, z: -1.33, r: 30.1, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.09, r: 33.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# Gemma 3 27B

Google · Open · Small · 컨텍스트 128k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.3 | -0.98 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.0 | -1.0 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 41.4 | -0.57 | 실측 | [[scicode]] 23.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 30.5 | -1.3 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 11.0%×1.0, [[tau3-banking]] 1.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 35.8 | -0.94 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 30.4 | -1.31 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 30.1 | -1.33 | 실측 | [[aa-lcr]] 7.0%×1.0 |
| 지시 따르기 | 33.7 | -1.09 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
