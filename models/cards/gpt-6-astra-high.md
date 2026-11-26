---
type: Model
title: GPT-6 Astra (high)
creator: OpenAI
license: Proprietary
intelligence_index: 54.900343373011
price_blended_usd_1m: 7.7
output_speed_tps: 48.1981943948127
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.7, z: 1.94, r: 79.1, estimated: false }  # 전문 지식
  reasoning: { s: 83.4, z: 2.4, r: 86.0, estimated: false }  # 추론
  coding: { s: 79.8, z: 1.31, r: 69.6, estimated: false }  # 코딩
  agentic: { s: 81.7, z: 1.22, r: 68.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.25, r: 68.8, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.0, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-6 Astra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.900343373011** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 48.1981943948127 t/s · TTFT 38.1059953296194s · 1M ctx` · 가성비 7.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 79.1 | +1.94 | 실측 | [[gpqa-diamond]] 94.9495%×0.4, [[humanitys-last-exam]] 53.0584%×0.3 |
| 추론 | 86.0 | +2.4 | 실측 | [[critpt]] 28.8571%×1.0, [[gpqa-diamond]] 94.9495%×1.0, [[humanitys-last-exam]] 53.0584%×1.0 |
| 코딩 | 69.6 | +1.31 | 실측 | [[scicode]] 55.4398%×1.0 |
| 에이전트 | 68.3 | +1.22 | 실측 | [[gdpval]] 1538.22 Elo×1.0, [[tau3-banking]] 40%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.8 | +1.25 | 실측 | [[mmmu-pro]] 86.4162%×1.0 |
| 긴문맥 | 64.9 | +1.0 | 실측 | [[aa-lcr]] 80%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
