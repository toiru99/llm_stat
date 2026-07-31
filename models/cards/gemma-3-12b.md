---
type: Model
title: Gemma 3 12B
creator: Google
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 12.2
is_reasoning: false
radar:
  knowledge: { s: 17.2, z: -1.13, r: 33.0, estimated: false }  # 전문 지식
  reasoning: { s: 12.5, z: -1.11, r: 33.4, estimated: false }  # 추론
  coding: { s: 19.4, z: -1.15, r: 32.8, estimated: false }  # 코딩
  agentic: { s: 3.9, z: -1.27, r: 31.0, estimated: false }  # 에이전트
  trust: { s: 2.3, z: -1.22, r: 31.6, estimated: false }  # 신뢰성
  multimodal: { s: 32.9, z: -1.87, r: 21.9, estimated: false }  # 멀티모달
  long_context: { s: 9.2, z: -1.19, r: 32.1, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.74, r: 38.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 12B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# Gemma 3 12B

Google · Open · Small(12.2B) · 컨텍스트 128k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.0 | -1.13 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 35.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 33.4 | -1.11 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 35.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 32.8 | -1.15 | 실측 | [[scicode]] 17.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 31.0 | -1.27 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 11.0%×1.0, [[tau3-banking]] 1.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 31.6 | -1.22 | 실측 | [[aa-omniscience]] 3.0%×1.0 |
| 멀티모달 | 21.9 | -1.87 | 실측 | [[mmmu-pro]] 38.0%×1.0 |
| 긴문맥 | 32.1 | -1.19 | 실측 | [[aa-lcr]] 7.0%×1.0 |
| 지시 따르기 | 38.9 | -0.74 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
