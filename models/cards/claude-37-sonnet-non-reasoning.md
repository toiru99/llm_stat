---
type: Model
title: Claude 3.7 Sonnet (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.7, z: -0.39, r: 44.1, estimated: false }  # 전문 지식
  reasoning: { s: 22.9, z: -0.61, r: 40.9, estimated: false }  # 추론
  coding: { s: 32.2, z: -0.3, r: 45.5, estimated: false }  # 코딩
  agentic: { s: 41.3, z: -0.2, r: 46.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 60.8, z: -0.54, r: 41.8, estimated: false }  # 멀티모달
  long_context: { s: 58.3, z: 0.02, r: 50.3, estimated: false }  # 긴문맥
  instruction: { s: 44.8, z: -0.23, r: 46.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.7 Sonnet (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Claude 3.7 Sonnet (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 44.1 | -0.39 | 실측 | [[gpqa-diamond]] 65.5556%×0.4, [[humanitys-last-exam]] 4.16%×0.3 |
| 추론 | 40.9 | -0.61 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 65.5556%×1.0, [[humanitys-last-exam]] 4.16%×1.0 |
| 코딩 | 45.5 | -0.3 | 실측 | [[terminal-bench]] 21.2121%×0.5 |
| 에이전트 | 46.9 | -0.2 | 실측 | [[tau2-bench]] 50%×1.0, [[terminal-bench]] 21.2121%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 41.8 | -0.54 | 실측 | [[mmmu-pro]] 60.0578%×1.0 |
| 긴문맥 | 50.3 | +0.02 | 실측 | [[aa-lcr]] 51.6667%×1.0 |
| 지시 따르기 | 46.5 | -0.23 | 실측 | [[ifbench]] 44.0136%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
