---
type: Model
title: GPT-6 Astra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 56.8538559596797
price_blended_usd_1m: 7.7
output_speed_tps: 42.3674412923132
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.4, z: 1.98, r: 79.7, estimated: false }  # 전문 지식
  reasoning: { s: 87.3, z: 2.55, r: 88.2, estimated: false }  # 추론
  coding: { s: 81.5, z: 1.41, r: 71.1, estimated: false }  # 코딩
  agentic: { s: 84.2, z: 1.36, r: 70.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 96.5, z: 1.28, r: 69.2, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.22, r: 68.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# GPT-6 Astra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.8538559596797** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 42.3674412923132 t/s · TTFT 189.553573923367s · 1M ctx` · 가성비 7.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.7 | +1.98 | 실측 | [[gpqa-diamond]] 96.0606060606061%×0.4, [[humanitys-last-exam]] 54.6802594995366%×0.3 |
| 추론 | 88.2 | +2.55 | 실측 | [[critpt]] 31.7142857142857%×1.0, [[gpqa-diamond]] 96.0606060606061%×1.0, [[humanitys-last-exam]] 54.6802594995366%×1.0 |
| 코딩 | 71.1 | +1.41 | 실측 | [[scicode]] 56.4814814814815%×1.0 |
| 에이전트 | 70.4 | +1.36 | 실측 | [[gdpval]] 1587.0%×1.0, [[tau3-banking]] 41.4432989690722%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 69.2 | +1.28 | 실측 | [[mmmu-pro]] 86.878612716763%×1.0 |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 80.6666666666667%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
