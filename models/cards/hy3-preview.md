---
type: Model
title: Hy3-preview
creator: Tencent
license: Open
intelligence_index: 34.0
price_blended_usd_1m: 0.0483
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: 295
is_reasoning: false
radar:
  knowledge: { s: 55.0, z: 0.65, r: 59.8, estimated: false }  # 전문 지식
  reasoning: { s: 52.1, z: 0.82, r: 62.3, estimated: false }  # 추론
  coding: { s: 62.7, z: 0.59, r: 58.9, estimated: false }  # 코딩
  agentic: { s: 72.7, z: 1.42, r: 71.2, estimated: false }  # 에이전트
  trust: { s: 12.8, z: -0.63, r: 40.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 72.3, z: 0.66, r: 60.0, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.72, r: 60.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hy3-preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# Hy3-preview

Tencent · Open · Large(295B) · 컨텍스트 256k · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.06 · 출력 $0.21 · 혼합 $0.0483/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 703.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.8 | +0.65 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 62.3 | +0.82 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 58.9 | +0.59 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 71.2 | +1.42 | 실측 | [[tau2-bench]] 93.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 40.5 | -0.63 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.0 | +0.66 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 60.7 | +0.72 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
