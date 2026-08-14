---
type: Model
title: Gemma 3n E4B
creator: Google
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0.066
output_speed_tps: 55.0
context_window: 32000
status: past
size_class: Small
params_b: 8.39
is_reasoning: false
radar:
  knowledge: { s: 13.0, z: -1.34, r: 29.9, estimated: false }  # 전문 지식
  reasoning: { s: 9.7, z: -1.26, r: 31.2, estimated: false }  # 추론
  coding: { s: 9.9, z: -1.57, r: 26.5, estimated: false }  # 코딩
  agentic: { s: 2.7, z: -1.33, r: 30.0, estimated: false }  # 에이전트
  trust: { s: 1.2, z: -1.15, r: 32.8, estimated: false }  # 신뢰성
  multimodal: { s: 15.7, z: -2.71, r: 9.3, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.52, r: 27.2, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.29, r: 30.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3n E4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# Gemma 3n E4B

Google · Open · Small(8.39B) · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.06 · 출력 $0.12 · 혼합 $0.066/1M · 55.0 t/s · TTFT 1.22s · 32k ctx` · 가성비 15.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.9 | -1.34 | 실측 | [[aa-omniscience]] 8.0%×1.0, [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 31.2 | -1.26 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 26.5 | -1.57 | 실측 | [[scicode]] 8.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 30.0 | -1.33 | 실측 | [[tau2-bench]] 5.0%×1.0, [[tau3-banking]] 0.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 32.8 | -1.15 | 실측 | [[aa-omniscience]] 3.0%×1.0 |
| 멀티모달 | 9.3 | -2.71 | 실측 | [[mmmu-pro]] 26.0%×1.0 |
| 긴문맥 | 27.2 | -1.52 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 30.6 | -1.29 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
