---
type: Model
title: GPT-5.5 Instant (May 2026)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.5, z: 0.71, r: 60.7, estimated: false }  # 전문 지식
  reasoning: { s: 40.6, z: 0.27, r: 54.1, estimated: false }  # 추론
  coding: { s: 64.4, z: 0.79, r: 61.8, estimated: false }  # 코딩
  agentic: { s: 57.1, z: 0.35, r: 55.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.8, z: 0.52, r: 57.9, estimated: false }  # 긴문맥
  instruction: { s: 83.4, z: 1.37, r: 70.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Instant (May 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-5.5 Instant (May 2026)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 60.7 | +0.71 | 실측 | [[gpqa-diamond]] 84.6465%×0.4, [[humanitys-last-exam]] 21.5941%×0.3 |
| 추론 | 54.1 | +0.27 | 실측 | [[critpt]] 2.57143%×1.0, [[gpqa-diamond]] 84.6465%×1.0, [[humanitys-last-exam]] 21.5941%×1.0 |
| 코딩 | 61.8 | +0.79 | 실측 | [[terminal-bench]] 42.4242%×0.5 |
| 에이전트 | 55.3 | +0.35 | 실측 | [[tau2-bench]] 49.4152%×1.0, [[terminal-bench]] 42.4242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.9 | +0.52 | 실측 | [[aa-lcr]] 66.3333%×1.0 |
| 지시 따르기 | 70.5 | +1.37 | 실측 | [[ifbench]] 71.4966%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
