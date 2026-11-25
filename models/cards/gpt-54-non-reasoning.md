---
type: Model
title: GPT-5.4 (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.175
output_speed_tps: 70.9988964586536
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 49.0, z: 0.11, r: 51.6, estimated: false }  # 전문 지식
  reasoning: { s: 30.3, z: -0.24, r: 46.3, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.55, r: 58.3, estimated: false }  # 코딩
  agentic: { s: 46.9, z: -0.01, r: 49.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.8, z: 0.17, r: 52.6, estimated: false }  # 멀티모달
  long_context: { s: 65.8, z: 0.25, r: 53.7, estimated: false }  # 긴문맥
  instruction: { s: 51.0, z: 0.02, r: 50.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-5.4 (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 70.9988964586536 t/s · TTFT 1.49926466882677s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 51.6 | +0.11 | 실측 | [[gpqa-diamond]] 74.8485%×0.4, [[humanitys-last-exam]] 11.2604%×0.3 |
| 추론 | 46.3 | -0.24 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 74.8485%×1.0, [[humanitys-last-exam]] 11.2604%×1.0 |
| 코딩 | 58.3 | +0.55 | 실측 | [[terminal-bench]] 37.8788%×0.5 |
| 에이전트 | 49.9 | -0.01 | 실측 | [[tau2-bench]] 35.9649%×1.0, [[terminal-bench]] 37.8788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.6 | +0.17 | 실측 | [[mmmu-pro]] 70.578%×1.0 |
| 긴문맥 | 53.7 | +0.25 | 실측 | [[aa-lcr]] 58.3333%×1.0 |
| 지시 따르기 | 50.4 | +0.02 | 실측 | [[ifbench]] 48.4354%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
