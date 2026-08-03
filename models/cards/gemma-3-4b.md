---
type: Model
title: Gemma 3 4B
creator: Google
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Tiny
params_b: 4.3
is_reasoning: false
radar:
  knowledge: { s: 13.5, z: -1.31, r: 30.4, estimated: false }  # 전문 지식
  reasoning: { s: 10.1, z: -1.23, r: 31.6, estimated: false }  # 추론
  coding: { s: 8.3, z: -1.61, r: 25.8, estimated: false }  # 코딩
  agentic: { s: 2.2, z: -1.33, r: 30.0, estimated: false }  # 에이전트
  trust: { s: 0.0, z: -1.33, r: 30.1, estimated: false }  # 신뢰성
  multimodal: { s: 21.4, z: -2.42, r: 13.6, estimated: false }  # 멀티모달
  long_context: { s: 7.9, z: -1.23, r: 31.5, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.26, r: 31.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Gemma 3 4B

Google · Open · Tiny(4.3B) · 컨텍스트 128k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.4 | -1.31 | 실측 | [[aa-omniscience]] 8.0%×1.0, [[gpqa-diamond]] 29.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 31.6 | -1.23 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 29.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 25.8 | -1.61 | 실측 | [[scicode]] 7.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 30.0 | -1.33 | 실측 | [[tau2-bench]] 5.0%×1.0, [[tau3-banking]] 0.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 30.1 | -1.33 | 실측 | [[aa-omniscience]] 1.0%×1.0 |
| 멀티모달 | 13.6 | -2.42 | 실측 | [[mmmu-pro]] 30.0%×1.0 |
| 긴문맥 | 31.5 | -1.23 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 31.1 | -1.26 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
