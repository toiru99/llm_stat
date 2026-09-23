---
type: Model
title: Hy3-preview
creator: Tencent
license: Open
intelligence_index: 23.0
price_blended_usd_1m: 0.0483
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.6, z: 0.56, r: 58.4, estimated: false }  # 전문 지식
  reasoning: { s: 50.1, z: 0.67, r: 60.1, estimated: false }  # 추론
  coding: { s: 51.5, z: 0.57, r: 58.5, estimated: false }  # 코딩
  agentic: { s: 72.7, z: 1.34, r: 70.1, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.67, r: 40.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 73.0, z: 0.68, r: 60.2, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.75, r: 61.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hy3-preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Hy3-preview

Tencent · Open · Large · 컨텍스트 256k · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.06 · 출력 $0.21 · 혼합 $0.0483/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 476.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.4 | +0.56 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 60.1 | +0.67 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 58.5 | +0.57 | 실측 | [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 70.1 | +1.34 | 실측 | [[tau2-bench]] 93.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 40.0 | -0.67 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.2 | +0.68 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 61.3 | +0.75 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
