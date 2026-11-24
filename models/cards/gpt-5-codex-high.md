---
type: Model
title: GPT-5 Codex (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: 126.451992181848
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.5, z: 0.86, r: 63.0, estimated: false }  # 전문 지식
  reasoning: { s: 45.5, z: 0.51, r: 57.7, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.55, r: 58.3, estimated: false }  # 코딩
  agentic: { s: 72.5, z: 0.9, r: 63.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.1, z: 0.39, r: 55.9, estimated: false }  # 멀티모달
  long_context: { s: 80.8, z: 0.71, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 87.1, z: 1.52, r: 72.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 Codex (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5 Codex (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 126.451992181848 t/s · TTFT 6.4674823376362s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 63.0 | +0.86 | 실측 | [[gpqa-diamond]] 83.7374%×0.4, [[humanitys-last-exam]] 27.8499%×0.3 |
| 추론 | 57.7 | +0.51 | 실측 | [[critpt]] 5.14286%×1.0, [[gpqa-diamond]] 83.7374%×1.0, [[humanitys-last-exam]] 27.8499%×1.0 |
| 코딩 | 58.3 | +0.55 | 실측 | [[terminal-bench]] 37.8788%×0.5 |
| 에이전트 | 63.5 | +0.9 | 실측 | [[tau2-bench]] 86.8421%×1.0, [[terminal-bench]] 37.8788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.9 | +0.39 | 실측 | [[mmmu-pro]] 73.815%×1.0 |
| 긴문맥 | 60.6 | +0.71 | 실측 | [[aa-lcr]] 71.6667%×1.0 |
| 지시 따르기 | 72.9 | +1.52 | 실측 | [[ifbench]] 74.1497%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
