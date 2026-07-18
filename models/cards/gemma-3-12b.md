---
type: Model
title: Gemma 3 12B
creator: Google
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.0
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 12.2
is_reasoning: false
radar:
  knowledge: { s: 17.2, z: -1.13, r: 33.1, estimated: false }  # 전문 지식
  reasoning: { s: 12.5, z: -1.11, r: 33.3, estimated: false }  # 추론
  coding: { s: 19.4, z: -1.13, r: 33.0, estimated: false }  # 코딩
  agentic: { s: 3.9, z: -1.26, r: 31.1, estimated: false }  # 에이전트
  trust: { s: 2.4, z: -1.2, r: 32.0, estimated: false }  # 신뢰성
  multimodal: { s: 33.3, z: -1.83, r: 22.5, estimated: false }  # 멀티모달
  long_context: { s: 9.2, z: -1.17, r: 32.4, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.71, r: 39.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 12B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-18
timestamp: 2026-07-18T00:00:00Z
---

# Gemma 3 12B

Google · Open · Small(12.2B) · 컨텍스트 128k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.0/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.1 | -1.13 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 35.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 33.3 | -1.11 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 35.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.0 | -1.13 | 실측 | [[scicode]] 17.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 31.1 | -1.26 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 11.0%×1.0, [[tau3-banking]] 1.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 32.0 | -1.2 | 실측 | [[aa-omniscience]] 3.0%×1.0 |
| 멀티모달 | 22.5 | -1.83 | 실측 | [[mmmu-pro]] 38.0%×1.0 |
| 긴문맥 | 32.4 | -1.17 | 실측 | [[aa-lcr]] 7.0%×1.0 |
| 지시 따르기 | 39.3 | -0.71 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
