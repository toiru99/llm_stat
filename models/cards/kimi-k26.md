---
type: Model
title: Kimi K2.6
creator: Kimi
license: Open
intelligence_index: 44.0
price_blended_usd_1m: 0.7
output_speed_tps: 43.0
context_window: 256000
radar:
  knowledge: { s: 65.9, z: 0.43, r: 56.5, estimated: false }  # 전문 지식
  reasoning: { s: 62.9, z: 0.63, r: 59.4, estimated: false }  # 추론
  coding: { s: 81.1, z: 0.75, r: 61.3, estimated: false }  # 코딩
  agentic: { s: 65.7, z: 0.45, r: 56.8, estimated: false }  # 에이전트
  trust: { s: 71.2, z: 1.39, r: 70.9, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.69, r: 60.3, estimated: false }  # 멀티모달
  long_context: { s: 94.6, z: 0.77, r: 61.5, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 0.94, r: 64.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Kimi K2.6

Kimi · Open · 컨텍스트 256k · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.7/1M · 43.0 t/s · TTFT 2.88s · 256k ctx` · 가성비 62.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.5 | +0.43 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 59.4 | +0.63 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 61.3 | +0.75 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 56.8 | +0.45 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 34.0%×1.0, [[itbench]] 31.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 70.9 | +1.39 | 실측 | [[aa-omniscience]] 61.0%×1.0 |
| 멀티모달 | 60.3 | +0.69 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 61.5 | +0.77 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
