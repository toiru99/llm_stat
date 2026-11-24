---
type: Model
title: GPT-5.2 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.8725
output_speed_tps: 63.8314417162627
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.6, z: 0.92, r: 63.7, estimated: false }  # 전문 지식
  reasoning: { s: 48.5, z: 0.66, r: 60.0, estimated: false }  # 추론
  coding: { s: 65.5, z: 0.82, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 70.2, z: 0.82, r: 62.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.1, z: 0.44, r: 56.7, estimated: false }  # 멀티모달
  long_context: { s: 79.3, z: 0.66, r: 59.9, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 1.0, r: 65.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.2 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 63.8314417162627 t/s · TTFT 8.80545255356666s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 63.7 | +0.92 | 실측 | [[gpqa-diamond]] 86.3636%×0.4, [[humanitys-last-exam]] 26.6914%×0.3 |
| 추론 | 60.0 | +0.66 | 실측 | [[critpt]] 7.85714%×1.0, [[gpqa-diamond]] 86.3636%×1.0, [[humanitys-last-exam]] 26.6914%×1.0 |
| 코딩 | 62.4 | +0.82 | 실측 | [[terminal-bench]] 43.1818%×0.5 |
| 에이전트 | 62.2 | +0.82 | 실측 | [[tau2-bench]] 74.269%×1.0, [[terminal-bench]] 43.1818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.7 | +0.44 | 실측 | [[mmmu-pro]] 74.5665%×1.0 |
| 긴문맥 | 59.9 | +0.66 | 실측 | [[aa-lcr]] 70.3333%×1.0 |
| 지시 따르기 | 65.1 | +1.0 | 실측 | [[ifbench]] 65.2381%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
